// Home.tsx
import { useState } from "react";
import { useStore } from "@/Zustand/store";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Profile } from "@/Zustand/interfaces";
export default function Home() {
  const addField = useStore((state) => state.addField);
  const [formValues, setFormValues] = useState<Profile>({
    firstName: "",
    lastName: "",
    contact: "",
    address: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addField(formValues);
    console.log(formValues);
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <div>
        <h2>ZUSTAND FORM</h2>
        <form onSubmit={handleSubmit}>
          <Label>
            First Name
            <Input
              type="text"
              name="firstName"
              value={formValues.firstName}
              onChange={handleChange}
            />
          </Label>
          <Label>
            Last Name
            <Input
              type="text"
              name="lastName"
              value={formValues.lastName}
              onChange={handleChange}
            />
          </Label>
          <Label>
            Contact
            <Input
              type="text"
              name="contact"
              value={formValues.contact}
              onChange={handleChange}
            />
          </Label>
          <Label>
            Address
            <Input
              type="text"
              name="address"
              value={formValues.address}
              onChange={handleChange}
            />
          </Label>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
