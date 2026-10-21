"use client";

import { useState } from "react";

interface ContactFormProps {
  formSubject?: string;
  source?: string;
}

export default function ContactForm({
  formSubject = "New Inquiry - CKS Partner with Us",
  source = "Partner with Us Page",
}: ContactFormProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    organisation: "",
    jobTitle: "",
    country: "",
    businessType: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email) {
      setStatus("error");
      setErrorMessage("Please fill in your name and email.");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    const accessKey =
      process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "9f1efe04-8883-42c6-9198-421c83444200";

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: formSubject,
          name: formData.fullName,
          from_name: formData.fullName,
          email: formData.email,
          organisation: formData.organisation,
          company: formData.organisation,
          job_title: formData.jobTitle,
          country: formData.country,
          business_type: formData.businessType,
          message: formData.message,
          source: source,
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setStatus("success");
        setFormData({
          fullName: "",
          email: "",
          organisation: "",
          jobTitle: "",
          country: "",
          businessType: "",
          message: "",
        });
      } else {
        setStatus("error");
        setErrorMessage(
          result.message || "Something went wrong while submitting the form. Please try again."
        );
      }
    } catch {
      setStatus("error");
      setErrorMessage(
        "Network error. Please check your internet connection or email us directly at hello@ceylonknowledge.com."
      );
    }
  };

  return (
    <div>
      {status === "success" ? (
        <div className="bg-[#E4ECEB] border border-[#043D3B]/20 rounded-[12px] p-8 text-center space-y-4">
          <div className="w-12 h-12 bg-[#043D3B] text-[#F3EFEA] rounded-full flex items-center justify-center mx-auto mb-2">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h3 className="font-[family-name:var(--head)] text-xl font-semibold text-[var(--teal)]">
            Message Sent Successfully
          </h3>
          <p className="text-[1.05rem] text-[var(--ink)] max-w-md mx-auto leading-relaxed">
            Thank you. We have received your message and will reply within one working day.
          </p>
          <div className="pt-2">
            <button
              type="button"
              onClick={() => setStatus("idle")}
              className="text-sm font-semibold text-[var(--teal)] underline underline-offset-4 hover:opacity-80 cursor-pointer"
            >
              Send another message
            </button>
          </div>
        </div>
      ) : (
        <form
          className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-11"
          onSubmit={handleSubmit}
          noValidate={false}
        >
          <div className="field sm:col-span-2">
            <input
              type="text"
              id="full-name"
              name="fullName"
              required
              placeholder=" "
              value={formData.fullName}
              onChange={handleChange}
              disabled={status === "submitting"}
            />
            <label htmlFor="full-name">
              Full Name <span className="req" aria-hidden="true">*</span>
            </label>
          </div>

          <div className="field sm:col-span-2">
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder=" "
              value={formData.email}
              onChange={handleChange}
              disabled={status === "submitting"}
            />
            <label htmlFor="email">
              Work Email <span className="req" aria-hidden="true">*</span>
            </label>
          </div>

          <div className="field">
            <input
              type="text"
              id="organisation"
              name="organisation"
              placeholder=" "
              value={formData.organisation}
              onChange={handleChange}
              disabled={status === "submitting"}
            />
            <label htmlFor="organisation">Organisation</label>
          </div>

          <div className="field">
            <input
              type="text"
              id="job-title"
              name="jobTitle"
              placeholder=" "
              value={formData.jobTitle}
              onChange={handleChange}
              disabled={status === "submitting"}
            />
            <label htmlFor="job-title">Job Title</label>
          </div>

          <div className="field">
            <input
              type="text"
              id="country"
              name="country"
              placeholder=" "
              value={formData.country}
              onChange={handleChange}
              disabled={status === "submitting"}
            />
            <label htmlFor="country">Country / Region</label>
          </div>

          <div className="field">
            <input
              type="text"
              id="business-type"
              name="businessType"
              placeholder=" "
              value={formData.businessType}
              onChange={handleChange}
              disabled={status === "submitting"}
            />
            <label htmlFor="business-type">Business Type</label>
          </div>

          <div className="field sm:col-span-2">
            <textarea
              placeholder=" "
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              disabled={status === "submitting"}
            ></textarea>
            <label htmlFor="message">Message</label>
          </div>

          {status === "error" && (
            <div
              className="sm:col-span-2 p-4 rounded-md bg-[#FDEDED] border border-[#F5C2C7] text-[#842029] text-[0.95rem]"
              role="alert"
            >
              {errorMessage ||
                "Failed to send your message. Please check the required fields and try again."}
            </div>
          )}

          <div className="sm:col-span-2 flex items-center justify-between gap-5 flex-wrap mt-2">
            <button
              type="submit"
              disabled={status === "submitting"}
              className={`inline-flex items-center gap-2.5 bg-[var(--teal)] text-[var(--cream)] px-7 py-4 text-[1rem] rounded-full transition-colors border-none font-[family-name:var(--head)] font-medium group ${
                status === "submitting"
                  ? "opacity-70 cursor-not-allowed"
                  : "hover:bg-[#022B2A] cursor-pointer"
              }`}
            >
              {status === "submitting" ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-2 h-4 w-4 text-[var(--cream)]"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Sending...
                </>
              ) : (
                <>
                  Let's Talk
                  <svg
                    className="w-4 h-4 transition-transform group-hover:translate-x-1"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </>
              )}
            </button>
            <span className="text-[0.85rem] text-[var(--grey-text)]">
              Required fields marked *
            </span>
          </div>
        </form>
      )}
    </div>
  );
}
