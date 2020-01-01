<template>
    <Page class="page">
        <ActionBar title="Status Store" class="action-bar" />
        <ScrollView>
            <RadDataForm  ref="dataForm" :source="album" :metadata="md" :groups="groups">
            </RadDataForm>
        </ScrollView>
    </Page>
</template>

<script>
import { RadDataForm, PropertyGroup } from 'nativescript-ui-dataform';

require("nativescript-vue").registerElement(
    "RadDataForm",
    () => require("nativescript-ui-dataform").RadDataForm
);

export default {
    data() {
        return {
            groups:[],
            album: {
                bandName: "Edwhat Sheeran",
                albumName: "X",
                year: "2017",
                owned: true,
                myRating: 9.5,
            },
            md:{

            }
        };
    },
    created() {

        this.md = {                 
            propertyAnnotations:[
                    {
                        name:"bandName",
                        displayName:"My band name",
                        required:true,
                        groupName:"Group One"
                    },
                    {
                        name:"albumName",
                        displayName:"My album",
                        groupName:"Group One"
                        required:true
                    },
                    {
                        name:"year",
                        required:true,
                        groupName:"Group One"
                    },
                    {
                        name:"owned",
                        required:true,
                        groupName:"Group One"
                    },
                    {
                        name:"myRating",
                        required:true,
                        groupName:"Group One"
                    }
                ]
        };

        let pg = new PropertyGroup(); 
        
        pg.name = "Group One"; 
        pg.collapsible = true;
        pg.collapsed = false;
            
        this.groups.push(pg);

    }
};
</script>

<style scoped>
</style>
