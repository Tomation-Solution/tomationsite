import React from "react";
import { GetStartedContainer } from "./GetStarted.styles";
import { Form, FormHalveInput, FormInput } from "../../global/forms.styles";
import { useForm } from "react-hook-form";
import { GlobalHeader } from "../../global/glob-styles";
import Button from "../../global/Button/Button";
import BackDrop from "../BackDrop/BackDrop";

import { AiOutlineClose } from "react-icons/ai";

type Props = {
  show: boolean;
  closefn: () => void;
};

const GetStarted: React.FC<Props> = ({ show, closefn }) => {
  const { handleSubmit, register } = useForm({
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      organization: "",
      phone: "",
      position: "",
      message: "",
    },
  });

  const onHandleSubmit = (data: any) => {
    console.log(data);
  };

  return (
    // <BackDrop>
    <GetStartedContainer isOpen={show}>
      <div className="close-btn">
        <AiOutlineClose onClick={closefn} />
      </div>

      <GlobalHeader style={{ textAlign: "center" }}>Get Started</GlobalHeader>

      <Form onSubmit={handleSubmit(onHandleSubmit)}>
        <FormHalveInput>
          <FormInput>
            <label>
              First name
              <br />
              <input
                type="text"
                {...register("firstname", { required: true })}
              />
            </label>
          </FormInput>

          <FormInput>
            <label>
              Last name
              <br />
              <input
                type="text"
                {...register("lastname", { required: true })}
              />
            </label>
          </FormInput>
        </FormHalveInput>

        <FormHalveInput>
          <FormInput>
            <label>
              Email
              <br />
              <input type="email" {...register("email", { required: true })} />
            </label>
          </FormInput>

          <FormInput>
            <label>
              Organisation
              <br />
              <input
                type="text"
                {...register("organization", { required: true })}
              />
            </label>
          </FormInput>
        </FormHalveInput>

        <FormHalveInput>
          <FormInput>
            <label>
              Phone
              <br />
              <input type="text" {...register("phone", { required: true })} />
            </label>
          </FormInput>

          <FormInput>
            <label>
              Position
              <br />
              <input
                type="text"
                {...register("position", { required: true })}
              />
            </label>
          </FormInput>
        </FormHalveInput>

        <FormInput>
          <label>
            Message
            <br />
            <textarea />
          </label>
        </FormInput>

        <div className="btn-centered">
          <Button>Send</Button>
        </div>
      </Form>
    </GetStartedContainer>
    // </BackDrop>
  );
};

export default GetStarted;
