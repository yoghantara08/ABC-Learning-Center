import { Link } from "react-router-dom";
import MainLayout from "../../components/layout/MainLayout";
import "./PrivacyPolicy.css";

const PrivacyPolicyPage = () => {
  return (
    <MainLayout>
      <section id="privacy-banner">
        <div class="privacy-banner-text">
          <h1>
            <span>Privacy</span> Policy
          </h1>
          <p>ABC Learning Center</p>
        </div>
      </section>
      <section id="privacy-statement">
        <strong>
          1. What information do we collect and what do we do with it?
        </strong>
        <p>
          When you enroll as a student or subscriber (“learner”) on our site or
          related courses, as part of the enrolling process, we collect the
          personal information you give us such as your name and email address.
        </p>
        <p>
          Email marketing: we may send you emails about our site and related
          course(s), registration, course content, your course progress or other
          updates. We may also use your email to inform you about changes to the
          course, survey you about your usage, or collect your opinion.
        </p>
        <strong>2. How do you get my consent?</strong>
        <p>
          When you provide us with personal information to become a learner on
          our site, make a purchase, or participate in the course, you imply
          that you consent to our collecting it and using it for that specific
          reason only.
        </p>
        <p>
          If we ask for your personal information for a secondary reason, like
          marketing, we will either ask you directly for your expressed consent,
          or provide you with an opportunity to say no.
        </p>
        <strong>How do I withdraw my consent?</strong>
        <p>
          If after you opt-in, you change your mind, you may withdraw your
          consent for us to contact you, for the continued collection, use or
          disclosure of your information, at anytime, by contacting us at{" "}
          <Link>abclearning@email.com</Link>
        </p>
        <strong>3. Disclosure</strong>
        <p>
          We may disclose your personal information if we are required by law to
          do so or if you violate our <Link>Terms of service</Link>
        </p>
        <strong>4. Third Party Services</strong>
        <p>
          In general, the third-party providers used by us will only collect,
          use and disclose your information to the extent necessary to allow
          them to perform the services they provide to us. However, certain
          third-party service providers, such as payment gateways and other
          payment transaction processors, have their own privacy policies in
          respect to the information we are required to provide to them for your
          purchase-related transactions.
        </p>
        <p>
          For these providers, we recommend that you read their privacy policies
          so you can understand the manner in which your personal information
          will be handled by these providers. Certain providers may be located
          in or have facilities that are located in a different jurisdiction
          than either you or us. If you elect to proceed with a transaction that
          involves the services of a third-party service provider, then your
          information may become subject to the laws of the jurisdiction(s) in
          which that service provider or its facilities are located.
        </p>
        <strong>5. Security</strong>
        <p>
          To protect your personal information, we take reasonable precautions
          and follow industry best practices to make sure it is not
          inappropriately lost, misused, accessed, disclosed, altered or
          destroyed. If you provide us with your credit card information, the
          information is encrypted using secure socket layer technology (SSL)
          and stored with a AES-256 encryption. Although no method of
          transmission over the Internet or electronic storage is 100% secure,
          we follow all PCI-DSS requirements and implement additional generally
          accepted industry standards.
        </p>
        <strong>Cookies</strong>
        <p>
          We collect cookies or similar tracking technologies. This means
          information that our website's server transfers to your computer. This
          information can be used to track your session on our website. Cookies
          may also be used to customize our website content for you as an
          individual. If you are using one of the common Internet web browsers,
          you can set up your browser to either let you know when you receive a
          cookie or to deny cookie access to your computer.
        </p>
        <strong>How to Contact Us</strong>
        <p>
          Should you have other questions or concerns about this Privacy Policy,
          please send us an email at <Link>abclearning@email.com</Link>
        </p>
      </section>
    </MainLayout>
  );
};

export default PrivacyPolicyPage;
