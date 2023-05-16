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
        },
        async addNote() {
            try {
                const response = await fetch('/api/notes', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(this.newNote)
                })
                if (response.ok) {
                    const data = await response.json()
                    this.notes.push(data)
                    this.newNote = {
                        title: '',
                        content: ''
                    }
                } else {
                    console.log('Error al agregar nota')
                }
            } catch (error) {
                console.error(error)
            }
        },
        async deleteNote(noteId) {
            try {
                const response = await fetch(`/api/notes/${noteId}`, {
                    method: 'DELETE'
                })
                if (response.ok) {
                    this.notes = this.notes.filter(note => note.id !== noteId)
                } else {
                    console.log('Error al eliminar la nota')
                }
            } catch (error) {
                console.error(error)
            }
        }
    }
})