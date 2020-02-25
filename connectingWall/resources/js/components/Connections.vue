<template>
    <div class="margin-top-gone"
         :class="getFullWidthClasses">

        <h2  class="margin-top-gone" v-text="getHeading"></h2>
        <div v-if="wallIsSolved" class="col-xs-12 col-sm-12 col-md-12 col-lg-12 margin-top-gone">
            <h3>Now lets see if you can name the connections</h3>

            <div v-for="group, index in getGroups" :class="getFullWidthClasses" >
                <div :class="getFullWidthClasses">
                    <group :tiles="getTilesForGroup(group.id)"
                           :solved="true" >
                    </group>
                </div>
                <div :class="getFullWidthClasses">

                    <input-with-submit
                            v-if="getUserConnectionForGroup(group.id) === ''"
                            onClickFunc="connections/saveConnection"
                            :onClickData="{groupId:group.id}"
                    ></input-with-submit>

                    <div v-else>
                        <p >Your guess: {{ getUserConnectionForGroup(group.id) }}</p>
                        <p>Answer: {{ getCorrectConnectionForGroup(group.id) }} </p>
                    </div>


                </div>

            </div>
        </div>
    </div>




</template>

<script>
    import {mapGetters,mapActions} from 'vuex';
    import Group from './Group.vue';
    import InputWithSubmit from '../inputs/InputWithSubmit.vue';

    export default {
        components: {
            Group,
            InputWithSubmit
        },
        computed: {
          getHeading() {
              if(this.wallIsSolved) {
                  return 'Congratulations you solved the wall!';
              } else {
                  return 'Please finish the wall and then come back!'
              }
          },
            getFullWidthClasses() {
                return 'col-xs-12 col-sm-12 col-md-12 col-lg-12';
            },
            ...mapGetters({
                wallIsSolved: 'wall/wallSolved',
                getGroups: 'connections/getGroups',
                getTilesForGroup: 'wall/getTilesForGroup',
                getUserConnectionForGroup: 'connections/getUserConnectionForGroup',
                getCorrectConnectionForGroup: 'connections/getCorrectConnectionForGroup'
            }),



        },
    };
</script>