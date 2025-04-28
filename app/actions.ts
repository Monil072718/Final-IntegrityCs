"use server"

export async function sendContactEmail(formData: FormData) {
  // Simulate a delay to mimic sending an email
  await new Promise((resolve) => setTimeout(resolve, 1500))

  // Get form data
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const phone = formData.get("phone") as string
  const subject = formData.get("subject") as string
  const message = formData.get("message") as string

  // In a real application, you would send an email here
  // For example, using a service like Nodemailer, SendGrid, etc.
  console.log("Contact form submission:", {
    name,
    email,
    phone,
    subject,
    message,
  })

  // For demonstration purposes, we'll just return success
  return { success: true }
}
