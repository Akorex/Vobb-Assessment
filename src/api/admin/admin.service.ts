import { CustomError } from "../errorhandlers/error";
import { IAdmin } from "./admin.interface";
import User from "./admin.model";
import { ResponseHandler } from "../responses/response";
import { generateAccessToken, generateHashedValue } from "../utils";
import { checkValidity } from "../utils";

export class AuthService {
  public async register(payload: IAdmin) {
    try {
      const { firstName, lastName, email, phone, password } = payload;

      const existingUser = await User.findOne({ email });

      if (existingUser) {
        return ResponseHandler.error(`User already exists. Log in instead`);
      }

      await User.create({
        firstName,
        lastName,
        email,
        password: generateHashedValue(password),
        phone,
      });

      return ResponseHandler.success(`Successfully created account`, {});
    } catch (error) {
      throw CustomError.wrap(error);
    }
  }

  public async login(email: string, password: string) {
    try {
      const user = await User.findOne({ email });

      if (!user) {
        return ResponseHandler.error(
          `This account does not exist. Please signup instead`
        );
      }

      if (!checkValidity(password, user.password)) {
        return ResponseHandler.error(
          `You have entered a wrong login credentials`
        );
      }

      const accessToken = await generateAccessToken(
        user._id as unknown as string
      );

      return ResponseHandler.success("Successfully logged-in", {
        user: {
          _id: user._id,
          firstName: user.firstName,
          lastName: user.lastName,
        },
        accessToken,
      });
    } catch (error) {
      throw CustomError.wrap(error);
    }
  }
}
