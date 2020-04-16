export function dateStringToChinese(inputDate: string): string {
  const dateCalcTmp = new Date(inputDate);
  const strMonth: string = (dateCalcTmp.getMonth() + 1).toString();
  const strDay: string = dateCalcTmp.getDate().toString();
  const strHour: string = dateCalcTmp.getHours().toString().padStart(2, "0");
  const strMinute: string = dateCalcTmp.getHours().toString().padStart(2, "0");
  return `${strMonth}月${strDay}日 ${strHour}:${strMinute}`;
}
