export function phonenoValidator(phone) {
  //console.log('entered phone: '+phone);
  if (!phone) return "Phone no can't be empty."
  if (phone.length === 10) return ''
  else {return 'Phone must be 10 digit .'}
}
