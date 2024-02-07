import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Select, MenuItem, Container } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import FormDataCard from './formDatacard';
import _ from 'lodash';


const validationSchema = Yup.object({
  first_name: Yup.string().required('First Name is required'),
  last_name: Yup.string().required('Last Name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  phone: Yup.string().required('Phone is required'),
  department: Yup.string().required('Department is required'),
});

const MyFormUpdated = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [formData, setFormData] = useState<string>("");
  const [departments, setDepartments] = useState<any>(['HR', 'IT', 'Finance']);
  const [roles, setRoles] = useState<any>({
    HR: ['Manager', 'Coordinator'],
    IT: ['Developer', 'Tester'],
    Finance: ['Accountant', 'Analyst'],
  });
  const [countries, setCountries] = useState<any>(['USA', 'Canada', 'India']);
  const [states, setStates] = useState<any>({
    USA: ['New York', 'California'],
    Canada: ['Ontario', 'Quebec'],
    India: ['Maharashtra', 'Karnataka'],
  });

  const formik = useFormik({
    initialValues: {
      first_name: '',
      last_name: '',
      email: '',
      phone: '',
      department: '',
      role: '',
      country: '',
      state: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values: any) => {
      setFormData(values);
      setIsFormSubmitted(true);
    },
  });

  const handleDepartmentChange = (event: any) => {
    const selectedDepartment = event.target.value;
    formik.setFieldValue('department', selectedDepartment);
    formik.setFieldValue('role', '');
  };

  const handleCountryChange = (event: any) => {
    const selectedCountry = event.target.value;
    formik.setFieldValue('country', selectedCountry);
    formik.setFieldValue('state', '');
  };

  return (
    <Box>
      <Container>
      <Typography variant="h4" gutterBottom>
        My Form
      </Typography>

      <form onSubmit={formik.handleSubmit}>
   

        <TextField
          label="First Name"
          variant="outlined"
          fullWidth
          margin="normal"
          id="first_name"
          name="first_name"
          value={formik.values.first_name}
          onChange={formik.handleChange}
          error={formik.touched.first_name && Boolean(formik.errors.first_name)}
        //   helperText={formik.touched.first_name && formik.errors.first_name}
        />

        {/* Last Name */}
        <TextField
          label="Last Name"
          variant="outlined"
          fullWidth
          margin="normal"
          id="last_name"
          name="last_name"
          value={formik.values.last_name}
          onChange={formik.handleChange}
          error={formik.touched.last_name && Boolean(formik.errors.last_name)}
        //   helperText={formik.touched.last_name && formik.errors.last_name}
        />

        {/* Email */}
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          id="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
        //   helperText={formik.touched.email && formik.errors.email}
        />

        {/* Phone */}
        <TextField
          label="Phone"
          variant="outlined"
          fullWidth
          margin="normal"
          id="phone"
          name="phone"
          value={formik.values.phone}
          onChange={formik.handleChange}
          error={formik.touched.phone && Boolean(formik.errors.phone)}
        //   helperText={formik.touched.phone && formik.errors.phone}
        />
  <Select
          label="Department"
          variant="outlined"
          fullWidth
          id="department"
          name="department"
          value={formik.values.department}
          onChange={handleDepartmentChange}
          error={formik.touched.department && Boolean(formik.errors.department)}
          sx={{marginBottom:"16px"}}
        >
          <MenuItem value="" disabled>
            Select Department
          </MenuItem>
          {departments.map((department:any) => (
            <MenuItem key={department} value={department}>
              {department}
            </MenuItem>
          ))}
        </Select>

    
        <Select
          label="Role"
          variant="outlined"
          fullWidth
          id="role"
          name="role"
          value={formik.values.role}
          onChange={formik.handleChange}
          error={formik.touched.role && Boolean(formik.errors.role)}
          sx={{marginBottom:"16px"}}
        >
          <MenuItem value="" disabled>
            Select Role
          </MenuItem>
          {_.get(roles, formik.values.department, []).map((role: any) => (
            <MenuItem key={role} value={role}>
              {role}
            </MenuItem>
          ))}
        </Select>

        <Select
        label="Country"
        variant="outlined"
        fullWidth
        id="country"
        name="country"
        value={formik.values.country}
        onChange={handleCountryChange}
        error={formik.touched.country && Boolean(formik.errors.country)}
        sx={{marginBottom:"16px"}}
      >
        <MenuItem value="" disabled>
          Select Country
        </MenuItem>
        {countries.map((country:any) => (
          <MenuItem key={country} value={country}>
            {country}
          </MenuItem>
        ))}
      </Select>

      <Select
        label="State"
        variant="outlined"
        fullWidth
        id="state"
        name="state"
        value={formik.values.state}
        onChange={formik.handleChange}
        error={formik.touched.state && Boolean(formik.errors.state)}
        sx={{marginBottom:"16px"}}
      >
        <MenuItem value="" disabled>
          Select State
        </MenuItem>
        {formik.values.country &&
          states[formik.values.country].map((state:any) => (
            <MenuItem key={state} value={state}>
              {state}
            </MenuItem>
          ))}
      </Select>

        <Button type="submit" variant="contained" color="primary" size="large">
          Submit
        </Button>

        {isFormSubmitted && <FormDataCard formData={formData} />}
      </form>

      </Container>
      
    </Box>
  );
};

export default MyFormUpdated;
