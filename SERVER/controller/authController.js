if (!process.env.JWT_KEY) {
  console.error("JWT_KEY is not defined in environment variables.");
  res
    .status(500)
    .json({ success: false, error: "JWT key not configured in server" });
  return;
}
