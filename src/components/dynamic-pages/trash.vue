<template>
	<div class="trash note-list">
		<div class="no-notes" v-if="!notes || !notes.length">
			<img src="../../assets/icon/trash.svg" alt="" />
			<h1>No Notes In Trash</h1>
		</div>
		<ul class="clean-list note-list-container" ref="grid" v-else>
			<li class="note-container" v-for="note in notes" :key="note._id">
				<notePreview
					:note="note"
					@deleteNote="deleteNote"
					@save="save"
					@updateSelectedNotes="updateSelectedNotes"
				/>
			</li>
		</ul>
	</div>
</template>
<script>
import notePreview from '../note-preview.vue'
import Masonry from 'masonry-layout'

export default {
	name: 'archive',
	props: {
		notes: Array,
	},
	mounted() {
		const gridEl = this.$refs.grid
		const masonry = new Masonry(gridEl, {
			itemSelector: '.note-preview',
			// getter: 10,
			fitWidth: true,
		})
	},
	methods: {
		deleteNote(id) {
			this.$emit('deleteNote', id)
		},
		save(note) {
			this.$emit('save', note)
		},
		updateSelectedNotes(selectedNotes, isSelected) {
			this.$emit('updateSelectedNotes', selectedNotes, isSelected)
		},
	},
	components: {
		notePreview,
	},
}
</script>
