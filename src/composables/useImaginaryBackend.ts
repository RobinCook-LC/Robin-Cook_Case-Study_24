import dummyData from '@/data/dummy.json'

export function useImaginaryBackend() {
    function loadDummyData() {
        return dummyData
    }

    function saveToImaginaryBackend(data: Record<string, string|number|boolean>) {
        console.log('Saving to imaginary backend', data)
    }

    return {
        loadDummyData,
        saveToImaginaryBackend
    } as const
}
