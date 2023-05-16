new Vue({
    el: '#app',
    data() {
        return {
            notes: [],
            newNote: {
                title: '',
                content: ''
            },
            editingNoteId: null
        }
    },
    created() {
        this.loadNotes()
    },
    methods: {
        async loadNotes() {
            try {
                const response = await fetch('/api/notes')
                if (response.ok) {
                    const data = await response.json()
                    this.notes = data
                } else {
                    console.log('No se han podido cargar las notas')
                }
            } catch (error) {
                console.error(error)
            }
        }
    }
})