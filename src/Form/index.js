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

   

   const calculateResult = (mid, amount, code) => {
      //const rates = ratesData.rates;
      //const rate = rates.find(rate => rate.mid === mid);
      //const code = rates.code;
      
      setResult({
         sourceAmount: +amount,
         targetAmount: amount / mid,
         mid,
         code,
      }); 
   };
   const currenciesDate = ratesData.date;
   const formattedDate = currenciesDate && `${currenciesDate.slice(8)}-${currenciesDate.slice(5, 7)}-${currenciesDate.slice(0, 4)}`;

   const [amount, setAmount] = useState("");
   const [mid, setMid] = useState();
   const [code, setCode] = useState("EUR");
   const onInputChange = ({ target }) => setAmount(target.value);
   const onSelectChange = ({ target }) => (setMid(target.value)) && (setCode(target.key));

   const onFormSubmit = (event) => {
      event.preventDefault();
      calculateResult(mid, amount, code);
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
                           
                              <Label>
                                 <LabelText>
                                    Przeliczam na*:
                                 </LabelText>

                                 <Select
                                    value={mid}
                                    type="select"
                                    onChange={onSelectChange}
                                    required
                                 >
                                    {ratesData.rates.map(({ currency, code, mid } ) => (
                                       <option
                                          key={code}
                                          value={mid}
                                       >
                                          {currency + " - " + code}
                                       </option>
                                    ))};

                                 </Select>

                              </Label>
                           
                        </Fieldset>

                        <p><Button>Przelicz</Button></p>

                        <Info>Kursy walut pobierane są z Narodowego Banku Polskiego.<br />
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