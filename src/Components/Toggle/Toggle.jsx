import { useState } from "react";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormHelperText from "@mui/material/FormHelperText";
import Switch from "@mui/material/Switch";

export default function SwitchesGroup() {
  const [checked, setChecked] = useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);

    if (checked) {
      document.body.classList.remove("dark");
    } else {
      document.body.classList.add("dark");
    }
  };

  return (
    <FormControl component="fieldset" variant="standard">
      <FormGroup size="small">
        <FormControlLabel
          className="dark:text-white text-[#686c71]"
          control={
            <Switch checked={checked} onChange={handleChange} name="dark" />
          }
          label="dark mode"
        />
      </FormGroup>
    </FormControl>
  );
}
