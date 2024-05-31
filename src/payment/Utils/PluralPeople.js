import { useContext } from "react";
import LanguageContext from "../../language/LanguageContext";

export function PluralPeople({ people }) {
  const { languageData } = useContext(LanguageContext);
  let text = "";
  if (people === 0 && people > 1) {
    text = languageData.cardHotel.people;
  } else {
    text = languageData.cardHotel.person;
  }
  return text;
}
