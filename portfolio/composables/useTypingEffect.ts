export function useTypingEffect(inputText: string, speed: number = 500) {
    const text = ref<string[]>([]);
    const delay = ref<number>(speed);

    function addCharacter(char: string): Promise<void> {
        return new Promise(resolve => {
            setTimeout(() => {
                text.value.push(char);
                resolve();
            }, delay.value);
        });
    }

    async function startTyping(): Promise<void> {
        for (const char of inputText) {
            if (char === ' ')
                delay.value = 0
            else
                delay.value = speed

            await addCharacter(char);
        }
    }

    return { text, startTyping }
}