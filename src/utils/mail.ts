import { EmailConfig } from "../components/ContactForm/ContactForm.ts";
import emailJs from "@emailjs/browser";

export const sendEmail = (config: EmailConfig): Promise<any> => {
  const params = {
    from_name: config.name,
    from_email: config.from,
    message: config.body,
  };
  return emailJs.send("service_0rpn2m9", "template_afobyd9", params);
};

//C446B3B289FDE435091C166F8F29836FD88DA37F25EED8B136841BB737B0712A4FC481E1D49ADE360BD48FC2DDA24AE5
export const emailInit = () => {
  emailJs.init({
    publicKey: "fQQZDKxVjHxJbmOE6",
  });
};
