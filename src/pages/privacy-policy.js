import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <>
    <style jsx>{`
      h2{
        margin-top: 50px;
      }
      h3{
        margin-top: 20px;
        margin-left: 30px;
      }
      p{
        margin-top: 10px;
        margin-left: 30px;
      }
      .ml-0{
        margin-left: 0px !important;
      }
    `}</style>
    <div className="flex w-full justify-center relative h-fit text-white bg-fitfarm-midnight pb-20">
      <div className="w-full max-w-[1024px] px-6">
        <Link href="/">
          <h2 className="text-4xl">
            FitFarm
          </h2>
        </Link>
        <div className="w-full flex justify-center">
          <h2 className="text-3xl mb-10">
            Privacy Policy
          </h2>
        </div>
        <p className="ml-0">
          Welcome to FitFarm! This Privacy Policy is designed to help you understand how FitFarm collects, uses, and safeguards your personal information. By using our website, you agree to the terms outlined in this Privacy Policy.
        </p>
        <h2 className="text-2xl">
          1. Information We Collect
        </h2>
        <h3 className="text-xl">
          1.1 Personal Information
        </h3>
        <p>
          We may collect personal information, including but not limited to, your name, email address, and contact details when you register on our website or subscribe to our services.
        </p>
        <h3 className="text-xl">
          1.2 Non-Personal Information
        </h3>
        <p>
          We also collect non-personal information, such as browser type, and operating system, to improve the functionality of our website and enhance your experience.
        </p>
        <h2 className="text-2xl">
          2. How We Use Your Information
        </h2>
        <h3 className="text-xl">
          2.1 Personal Information
        </h3>
        <p>
          We use your personal information to provide you with the services you've requested, communicate with you, and customize your experience on FitFarm. We may also use your information for marketing purposes, such as sending newsletters and promotional materials.
        </p>
        <h3 className="text-xl">
          2.2 Non-Personal Information
        </h3>
        <p>
          Non-personal information is used to analyze trends, track user movement, and gather demographic information for aggregate use. This information helps us improve our website and tailor it to our users' needs.
        </p>
        <h2 className="text-2xl">
          3. Cookies and Google Analytics
        </h2>
        <h3 className="text-xl">
          3.1 Cookies
        </h3>
        <p>
          FitFarm uses cookies to enhance your browsing experience. Cookies are small files stored on your computer that help us track and analyze your preferences. You can choose to disable cookies in your browser settings, but this may affect your ability to use certain features on our website.
        </p>
        <h3 className="text-xl">
          3.2 Google Analytics
        </h3>
        <p>
          We use Google Analytics to collect and analyze information about how visitors use our site. Google Analytics uses cookies to track your interactions with FitFarm. This information is used to compile reports and improve our website. Google Analytics may also collect demographic and interest information.
        </p>
        <p>
          For more information on how Google Analytics collects and processes data, please visit Google's Privacy & Terms.
        </p>
        <h2 className="text-2xl">
          4. Third-Party Links
        </h2>
        <p>
          FitFarm may contain links to third-party websites. We are not responsible for the privacy practices or content of these sites. We encourage you to review the privacy policies of any third-party websites you visit.
        </p>
        <h2 className="text-2xl">
          5. Security
        </h2>
        <p>
          FitFarm takes reasonable measures to protect your personal information. However, no method of transmission over the internet or electronic storage is 100% secure. We cannot guarantee the absolute security of your information.
        </p>
        <h2 className="text-2xl">
          6. Changes to this Privacy Policy
        </h2>
        <p>
          FitFarm reserves the right to update this Privacy Policy at any time. We will notify you of any changes by posting the new Privacy Policy on this page. It is your responsibility to review this Privacy Policy periodically.
        </p>
      </div>
    </div>
    </>
  );
}
