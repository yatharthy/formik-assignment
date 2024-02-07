import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const FormDataCard = ({ formData }:any) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div" gutterBottom>
          Form Data
        </Typography>
        <Typography variant="body1" component="div">
          <strong>First Name:</strong> {formData.first_name}
        </Typography>
        <Typography variant="body1" component="div">
          <strong>Last Name:</strong> {formData.last_name}
        </Typography>
        <Typography variant="body1" component="div">
          <strong>Email:</strong> {formData.email}
        </Typography>
        <Typography variant="body1" component="div">
          <strong>Phone:</strong> {formData.phone}
        </Typography>
        <Typography variant="body1" component="div">
          <strong>Department:</strong> {formData.department}
        </Typography>
        <Typography variant="body1" component="div">
          <strong>Role:</strong> {formData.role}
        </Typography>
        <Typography variant="body1" component="div">
          <strong>Country:</strong> {formData.country}
        </Typography>
        <Typography variant="body1" component="div">
          <strong>State:</strong> {formData.state}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default FormDataCard;
