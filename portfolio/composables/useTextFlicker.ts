const text = ref<string>('')
const timeOut = ref<number>(500)

export async function useStringToArray(inputText: string): Promise<void> {
  for (const char of inputText) {
    await new Promise<void>(resolve => {
      setTimeout(() => {
        if (char === ' ')
          timeOut.value = 0
        else 
          timeOut.value = 500

        addChar(char)
        resolve()
      }, timeOut.value)
    });
  }
}

function addChar(char: string): void {
  if (text.value.length === 0)
    text.value = text.value.concat(char)
  else
    text.value = text.value.substring(0, text.value.length - 1).concat(char)
}

export { text };