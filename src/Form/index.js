import { useState } from "react";
import Result from "../Result";
import {
   Fieldset,
   StyledForm,
   Legend,
   Label,
   LabelText,
   Input,
   Select,
   Button,
   Loading,
   Failure,
   Info
} from "./styled";
import { useApiData } from "../useApiData";

const Form = () => {
   const [result, setResult] = useState();
   const ratesData = useApiData();

   const calculateResult = (currency, amount) => {
      const rate = ratesData.rates.find(rate => rate.currency === currency);
      
          
      setResult({
         sourceAmount: +amount,
         targetAmount: amount * rate.mid,
         rate,
         currency,
      });
   };

   const currenciesDate = ratesData.effectiveDate;
   const formattedDate = currenciesDate && `${currenciesDate.slice(8)}-${currenciesDate.slice(5,7)}-${currenciesDate.slice(0,4)}`;

   const [amount, setAmount] = useState("");
   
   const onInputChange = ({ target }) => setAmount(target.value);
   const [currency, setCurrency] = useState("euro");
   const onSelectChange = ({ target }) => setCurrency(target.value);

   const onFormSubmit = (event) => {
      event.preventDefault();
      calculateResult(currency, amount);
   };
   return (
      <StyledForm
         onSubmit={onFormSubmit}
      >
         {ratesData.state === "loading"
            ? (
               <Loading>
                  <span>
                     🕧 Chwilka...<br />🔨 Pobieramy kusy walut z Europejskiego Banku Centralnego.
                  </span>
               </Loading>
            )
            : (
               ratesData.state === "error"
                  ? (
                     <Failure>
                        <span>Ups... coś poszłonie tak 😒<br />
                           Sprawdż połączenie internetowe!<br />Jeżeli połączenie jest OK to może nasza wina 🤷‍♂️<br />Spróbuj za jakiś czas.
                        </span>
                     </Failure>
                  ) : (
                     <>
                        <Fieldset>
                           <Legend>
                              Wprowadź kwotę do przeliczenia
                           </Legend>

                           <Label>
                              <LabelText>
                                 Mam*:
                              </LabelText>
                              <Input
                                 value={amount}
                                 onChange={onInputChange}
                                 type="number"
                                 min="1"
                                 step="any"
                                 placeholder="kwota w PLN"
                                 required
                              />

                           </Label>
                        <>
                           <Label>
                              <LabelText>
                                 Przeliczam na*:
                              </LabelText>
                           
                              <Select
                                 value={currency.mid}
                                 type="select"
                                 required
                                 onChange={onSelectChange}
                              >
                                  {Object.keys(currency).map(((currency) => (
                                    <option
                                       key={currency}
                                       value={currency.mid}
                                    >
                                       {currency}
                                    </option>
                                 )))};

                              </Select>
                              
                           </Label>
                           </>
                        </Fieldset>

                        <p><Button>Przelicz</Button></p>

                        <Info>Kursy walut pobierane są z Europejskiego Banku Centralnego.<br />
                           Z dnia <strong>{formattedDate}</strong>
                        </Info>

                        <Result result={result} />
                     </>
                  )
            )}
      </StyledForm>
   );
};

export default Form;