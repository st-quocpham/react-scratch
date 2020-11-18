export function getStorage() {
  const result = localStorage.getItem('note');
  return result ? JSON.parse(result) : null;
}
export function setStorage(content: any) {
  localStorage.setItem('note', JSON.stringify(content));
}
