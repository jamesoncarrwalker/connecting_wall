<template>
    <div class="margin-top-gone"
         :class="getFullWidthClasses">

        <h2  class="margin-top-gone" v-text="getHeading"></h2>
        <div v-if="wallIsSolved" class="col-xs-12 col-sm-12 col-md-12 col-lg-12 margin-top-gone">
            <h3>Now lets see if you can name the connections</h3>

            <div v-for="group, index in getGroups" :class="getFullWidthClasses" >

                <group :tiles="getTilesForGroup(group.id)"
                        :solved="true" >
                </group>

            </div>
        </div>
    </div>




</template>

<script>

    import Group from './Group.vue';

    export default {
        components: {
            Group
        },
        computed: {
          getHeading() {
              if(this.wallIsSolved) {
                  return 'Congratulations you solved the wall!';
              } else {
                  return 'Please finish the wall and then come back!'
              }
          },

            wallIsSolved() {
                return this.$store.getters.wallSolved;
            },
            getFullWidthClasses() {
                return 'col-xs-12 col-sm-12 col-md-12 col-lg-12';
            },
            getGroups() {
              return this.$store.state.groups;
            },


        },
        methods: {
            getTilesForGroup(id) {
                return this.$store.getters.getTilesForGroup(id);
            }
        },
        mounted() {
            console.log('connections mounted');
            console.log('groups found array == ', this.$store.state.groupsFoundIds);
        }
    };
</script>