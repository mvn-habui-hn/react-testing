import { render, screen, fireEvent } from "@testing-library/react";
import Index from "../src/app/page.tsx";
import "@testing-library/jest-dom";

describe("Index", () => {
  it("renders a form submit", () => {
    render(<Index />);
    const inputUsername = screen.getByLabelText("username");
    const inputPassword = screen.getByLabelText("password");
    const submitBtn = screen.getByRole("button");

    fireEvent.change(inputUsername, {
      target: {
        value: "Monstarlab",
      },
    });

    expect(submitBtn).toBeDisabled();

    fireEvent.change(inputPassword, {
      target: {
        value: "Password",
      },
    });

    expect(submitBtn).not.toBeDisabled();

    expect(inputUsername.value).toBe("Monstarlab");
    expect(inputPassword.value).toBe("Password");
  });
});
