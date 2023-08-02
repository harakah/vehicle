import React from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { PayPalButton } from 'react-paypal-button-v2';
// import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { Icon } from 'react-icons-kit';
import Input from 'common/components/Input';
import Checkbox from 'common/components/Checkbox';
import Container from 'common/components/UI/ContainerTwo';
import SingleContainer from 'common/components/UI/Container';
import Heading from 'common/components/Heading';
import Text from 'common/components/Text';
import Link from 'common/components/Link';
import { chevronRight } from 'react-icons-kit/feather/chevronRight';
import SectionHeading from '../SectionHeading';
import SectionWrapper, { 
  ContentWrapper, 
  FaqItem, 
  InvoiceList,
  Line,
  Quantity,
  Secured,
  Checkout,
  EmailInputWrapper,
  ButtonPaypal,
  PaypalAccess,
  LoadingWrapper,
  Loader,
  PhoneInputWrapper,
  SuccessCheckmark
} from './faq.style';
import { validateEmail, validatePhone } from 'lib/validate';
import paypal_logo from 'common/assets/image/hostingModern/paypal.svg';
import { APIURL, PRICE, BASE_PRICE, PAYPAL_CLIENTID, SAMPLE_REPORT, URLWEB } from 'lib/constant';

const Faq = ({ data, vin }) => {
  const router = useRouter();
  const [checked, setChecked] = React.useState(false);
  const [email, setEmail] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [warning, setWarning] = React.useState({
    email: '*Required',
    phone: '*Required',
    checked: '*Required'
  });
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const validEmail = validateEmail(email);
  const validPhone = validatePhone(phone);
  
  const isCompleted = React.useCallback(() => {
    if (validEmail && checked && validPhone) {
      return true;
    }
    return false;
  });

  const successPaid = async (details) => {
    setLoading(true);
    try {
      const payload = {
        details,
        phone,
        email,
        productName: vin,
        amount: `${PRICE} USD`,
        total: `${PRICE} USD`,
        receiptDetail: `${data?.vehicle || ''}`
      };
      await axios.post(`${APIURL}mailer`, payload);
      setLoading(false);
      setSuccess(true);
    } catch (e) {
      setLoading(false);
      setSuccess(true);
    } finally { 
      setLoading(false);
      setSuccess(true);
      setTimeout(() => {
        router.push({
          pathname: `${URLWEB}report/${vin}`
        });
      }, 3000);
    }
  };

  return (
    <SectionWrapper id="faq">
      {/* Display Loading Purchase */}
      {loading &&
        <SingleContainer>
          <LoadingWrapper>
            <Loader />
            <br />
            <Heading as="h4" >Collecting data payment...</Heading>
          </LoadingWrapper>
        </SingleContainer>
      }
     
      {/* Display success purchase */}
      {success && 
        <SingleContainer>
          <LoadingWrapper>
            <SuccessCheckmark>
              <div className="check-icon">
                <span className="icon-line line-tip"></span>
                <span className="icon-line line-long"></span>
                <div className="icon-circle"></div>
                <div className="icon-fix"></div>
              </div>
            </SuccessCheckmark>
            <Heading as="h4" >Payment successfull!</Heading>
            <Text content="Your report has been sent to your email" fontSize="20px !important" />
          </LoadingWrapper>
        </SingleContainer>
      }

      {/* Display detail purchase */}
      {!success &&
        <Container>
          <SectionHeading
            slogan="Purchase the report now and find out detailed history of"
            title={data?.vehicle}
          />
          <ContentWrapper hidden={loading}>
            <InvoiceList>
              <FaqItem key="1">
                <Heading as="h4" >Order Summary</Heading>
                <Quantity>
                  <div>
                    <Text content="1 Report" mb="0" />
                    <Link href={`/report/${SAMPLE_REPORT}`} rel="noopener noreferrer" target="_blank">
                      See Example Report <Icon icon={chevronRight} />
                    </Link>
                  </div>
                  <div className="price">
                    <Text className="base-price" content={`$${BASE_PRICE}`} fontWeight="500" />&nbsp;&nbsp;
                    <Text content={`$${PRICE}`} fontWeight="600" />
                  </div>
                </Quantity>
                <Line />
              </FaqItem>
              <FaqItem key="2">
                <Quantity>
                  <Heading as="h4">Total</Heading>
                  <Text content={`$${PRICE}`} fontSize="20px !important" fontWeight="600" />
                </Quantity>
                <Line />
              </FaqItem>
              <FaqItem key="3">
                <Secured>
                  <img src="/paypal.png" />
                  <Text content="Pay through a secure payment service" />
                </Secured>
                <br />
              </FaqItem>
            </InvoiceList>
            <Checkout>
              <Heading as="h4" mb="0">Where should we send your report?</Heading>
              <PhoneInputWrapper>
                <Input
                  inputType="text"
                  onChange={e => setPhone(e)}
                  placeholder="Enter Phone Number"
                  iconPosition="left"
                  aria-label="phone"
                  minLength="17"
                />
              </PhoneInputWrapper>
              {!validPhone &&<Text content={warning.phone} fontSize="14px !important" mt="7px" color="#767676" mb="0" />}
              <EmailInputWrapper>
                <Input
                  inputType="email"
                  onChange={e => setEmail(e)}
                  placeholder="Enter Email Address"
                  iconPosition="left"
                  aria-label="email"
                />
              </EmailInputWrapper>
              {!validEmail && <Text content={warning.email} fontSize="14px !important" mt="-24px" color="#767676" />}
              <Checkbox
                isChecked={checked}
                checked={checked}
                onChange={e => setChecked(e.target.checked)}
                className="AGREE_TNC"
                labelText="I agree to Terms and Condition"
              />
              {!checked ? <Text content={warning.email} fontSize="14px !important" mt="7px" color="#767676" /> : <><br /><br /></>}
              <ButtonPaypal disabled hidden={isCompleted()}>
                <img src={paypal_logo} alt="paypal" />
              </ButtonPaypal>
              <PaypalAccess hidden={!isCompleted()}>
                <PayPalButton
                  amount={PRICE}
                  shippingPreference="NO_SHIPPING"
                  onSuccess={(details) => successPaid(details)}
                  options={{
                    clientId: PAYPAL_CLIENTID,
                    disableFunding: 'credit,card',
                    enableFunding: 'venmo'
                  }}
                  disableCard={true}
                  style={{
                    background: 'black'
                  }}
                />
                {/* <PayPalScriptProvider 
                  options={{ 
                    "client-id": PAYPAL_CLIENTID,
                    currency: "USD",
                    intent: "capture",
                  }}
                > 
                  <PayPalButtons style={{ layout: "horizontal" }} />
                </PayPalScriptProvider> */}
              </PaypalAccess>
            </Checkout>
          </ContentWrapper>
        </Container>
      }
    </SectionWrapper>
  );
};

export default Faq;
