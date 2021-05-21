export class InputValidator {
  public static validateUsername(username: string): boolean {
    const nameRegex =
      /^(?!.*\.\.)(?!_*__)(?!_.)(?!.*\.$)(?![0-9]*[0-9])[\w.]{2,14}$/;
    return !nameRegex.test(username);
  }

  public static validatePassword(password: string): boolean {
    const passwordRegex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/;
    return !passwordRegex.test(password);
  }

  public static validateEmail(email: string): boolean {
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,4})+$/;
    return !emailRegex.test(email);
  }

  public static validateVerifyCode(otp: string): boolean {
    const otpRegex = /^\b[0-9A-F]{8}$/;
    return !otpRegex.test(otp);
  }

  public static validateInputLength(
    input: string,
    length: number = 240,
  ): boolean {
    return !(input.length >= 1 && input.trim().length <= length);
  }

  public static validateDate(input: string): boolean {
    const dateRegex = /^\d{1,2}\/\d{1,2}\/\d{4}$/;
    return !dateRegex.test(input);
  }
}
