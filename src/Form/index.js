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
      const rates = ratesData.rates;
      const mid = rates.find(({ code }) => code === currency).mid;
      
      setResult({
         sourceAmount: +amount,
         targetAmount: amount / mid,
         currency,
      });
   };
   const currenciesDate = ratesData.date;
   const formattedDate = currenciesDate && `${currenciesDate.slice(8)}-${currenciesDate.slice(5, 7)}-${currenciesDate.slice(0, 4)}`;

   const [amount, setAmount] = useState("");
   const [currency, setCurrency] = useState("EUR");
   const onInputChange = ({ target }) => setAmount(target.value);
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
                     🕧 Chwilka...<br />🔨 Pobieramy kusy walut z Narodowego Banku Polskiego.
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

                           <Label>
                              <LabelText>
                                 Przeliczam na*:
                              </LabelText>

                              <Select
                                 value={currency}
                                 type="select"
                                 onChange={onSelectChange}
                                 required
                              >
                                 {ratesData.rates.map((currency => (
                                    <option
                                       key={currency.code}
                                       value={currency.code}
                                    >
                                       {currency.currency + " - " + currency.code}
                                    </option>
                                 )))};

                              </Select>

                           </Label>

                        </Fieldset>

                        <p><Button>Przelicz</Button></p>

                        <Info>Kursy walut pochodzą z Narodowego Banku Polskiego.<br />
                           Z dnia <strong>{formattedDate}</strong> - tabela nr {ratesData.no}
                        </Info>

                        <Result result={result} />
                     </>
                  )
            )}
      </StyledForm>
   );
};

export default Form;