


//function to send a success response
export const successResponse = ({
  res,
  message = "Done",
  status = 200,
  data = {},
}) => {
  return res.status(status).json({ message, data: { ...data } || {} });
};