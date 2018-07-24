<template>
    <section>
            <b-autocomplete
                rounded
                v-model="name"
                :data="filteredDataArray"
                placeholder="e.g. jQuery"
                icon="magnify"
                @select="option => selected = option">
                <template slot="empty">No results found</template>
            </b-autocomplete>
        </b-field>
    </section>
</template>

<script>
    export default {
        name: "SearchBar",
        data() {
            return {
                data: [
                    'Angular',
                    'Angular 2',
                    'Aurelia',
                    'Backbone',
                    'Ember',
                    'jQuery',
                    'Meteor',
                    'Node.js',
                    'Polymer',
                    'React',
                    'RxJS',
                    'Vue.js'
                ],
                name: '',
                selected: null
            }
        },
        computed: {
            filteredDataArray() {
                return this.data.filter((option) => {
                    return option
                        .toString()
                        .toLowerCase()
                        .indexOf(this.name.toLowerCase()) >= 0
                })
            }
        }
    }
</script>