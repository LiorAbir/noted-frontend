//WITHOUT BACKEND
import { storageService } from './storage.service.js'
const NOTE_KEY = 'note_DB'
_createNotes()

//WITH BACKEND
import { httpService } from './http.service.js'
const prmStr = 'note'

export const noteService = {
	query,
	remove,
	save,
	getEmptyNote,
	getById,
	// addEmailToNotes
}

async function query() {
	return storageService.query(NOTE_KEY)

	//WITH SERVER
	return await httpService.get(prmStr)
}

async function getById(id) {
	return storageService.get(NOTE_KEY, id)

	//WITH SERVER
	const note = await httpService.get(`${prmStr}/${id}`)
	return note
}

async function remove(id) {
	return storageService.remove(NOTE_KEY, id)

	//WITH SERVER
	return await httpService.delete(`${prmStr}/${id}`)
}

async function save(note) {
	if (note._id) {
		return storageService.put(NOTE_KEY, note)

		//WITH SERVER
		// return await httpService.put(`${prmStr}/${note._id}`, note)
	} else {
		return storageService.post(NOTE_KEY, note)

		//WITH SERVER
		// return await httpService.post(prmStr, note)
	}
}

function getEmptyNote() {
	return {
		id: '',
		type: 'note-txt',
		isPinned: false,
		bgClr: '#ffffff',
		bgImg: '',
		info: {},
	}
}

function addEmailToNotes(subejct, body) {
	const newNote = getEmptyNote()
	newNote.info.title = subejct
	newNote.info.txt = body
	save(newNote)
}

function _createNotes() {
	let notes = JSON.parse(localStorage.getItem(NOTE_KEY))
	if (!notes || !notes.length) {
		notes = _getNotes()
		localStorage.setItem(NOTE_KEY, JSON.stringify(notes))
	}
	return notes
}

function _getNotes() {
	return [
		{
			_id: 'n109',
			type: 'note-txt',
			isPinned: false,
			bgClr: '#ffffff',
			bgImg: '',
			info: {
				title: 'Text',
				txt: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum corrupti exercitationem nisi nulla repellendus, iure fuga quas voluptatibus eligendi ipsum fugit ...',
			},
		},
		{
			_id: 'n108',
			type: 'note-todos',
			isPinned: false,
			bgClr: '#ffffff',
			bgImg: '',
			info: {
				title: 'days',
				todos: [
					{ txt: 'sunday', doneAt: null },
					{ txt: 'monday', doneAt: 187111111 },
					{ txt: 'tusday', doneAt: 187111111 },
				],
			},
		},
		{
			_id: 'n103',
			type: 'note-todos',
			isPinned: true,
			bgClr: '#ffffff',
			bgImg: '',
			info: {
				title: 'Get my stuff together',
				todos: [
					{ txt: 'Driving liscence', doneAt: null },
					{ txt: 'Coding power', doneAt: 187111111 },
				],
			},
		},
		{
			_id: 'n104',
			type: 'note-img',
			isPinned: false,
			bgClr: '#ffffff',
			bgImg: '',
			info: {
				title: 'Hallelujah!!!',
				url: 'https://c.tenor.com/m53EbYd742IAAAAM/praise-dance.gif',
			},
		},
		{
			_id: 'n105',
			type: 'note-todos',
			isPinned: false,
			bgClr: '#ffffff',
			bgImg: '',
			info: {
				title: 'Get my stuff together',
				todos: [
					{ txt: 'Do this', doneAt: null },
					{ txt: 'Do that', doneAt: 187111111 },
					{ txt: 'Go to sleep', doneAt: 187111111 },
					{ txt: 'Learn', doneAt: 187111111 },
					{ txt: 'Eat', doneAt: 187111111 },
					{ txt: 'Sleepp', doneAt: 187111111 },
				],
			},
		},
		{
			_id: 'n106',
			type: 'note-txt',
			isPinned: false,
			bgClr: '#ffffff',
			bgImg: '',
			info: {
				title: 'Text',
				txt: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum corrupti exercitationem nisi nulla repellendus, iure fuga quas voluptatibus eligendi ipsum fugit ut inventore harum quibusdam ratione et reprehenderit temporibus sapiente?',
			},
		},
		{
			_id: 'n107',
			type: 'note-video',
			isPinned: false,
			bgClr: '#ffffff',
			bgImg: '',
			info: {
				title: 'Queen',
				url: 'https://www.youtube.com/embed/tgbNymZ7vqY',
			},
		},
		{
			_id: 'n102',
			type: 'note-img',
			isPinned: false,
			bgClr: '#ffffff',
			bgImg: '',
			info: {
				title: 'My pizza',
				url: 'https://images.unsplash.com/photo-1584365685547-9a5fb6f3a70c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
			},
		},
		{
			_id: 'n104',
			type: 'note-img',
			isPinned: false,
			bgClr: '#ffffff',
			bgImg: '',
			info: {
				title: 'shakshuka',
				url: 'https://images.unsplash.com/photo-1520218576172-c1a2df3fa5fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80',
			},
		},
		{
			_id: 'n101',
			type: 'note-txt',
			isPinned: false,
			bgClr: '#ffffff',
			bgImg: '',
			info: {
				title: 'story time',
				txt: `Once upon a time, a very long time ago now, about last Friday, Winnie-the-Pooh lived in a forest all by himself under the name of Sanders. ("What does 'under the name' mean?" asked Christopher Robin. "It means he had the name over the door in gold letters, and lived under it." "Winnie-the-Pooh wasn't quite sure," said Christopher Robin. "Now I am," said a growly voice. "Then I will go on," said I.) One day when he was out walking, he came to an open place in the middle of the forest, and in the middle of this place was a large oak-tree, and, from the top of the tree, there came a loud buzzing-noise.`,
			},
		},
		{
			_id: 'n110',
			type: 'note-img',
			isPinned: false,
			bgClr: '#ffffff',
			bgImg: '',
			info: {
				title: ':)',
				url: 'https://images.unsplash.com/photo-1464219551459-ac14ae01fbe0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
			},
		},
	]
}