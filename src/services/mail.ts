import emailjs from "@emailjs/browser";

const sendEmail = async (templateParams: string) => {
  emailjs
    .sendForm(
      "service_taqqbpa",
      "template_p44qfwj",
      templateParams,
      "xjSAOQb25O4fN31Ey"
    )
    .then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
};

export default sendEmail;
