<template>
    <Page>
        <ActionBar title="" class="action-bar header">
            <StackLayout orientation="horizontal" height="38"
                alignItems="left" class="actionBarContainer">
                <StackLayout class="HLeft" style="margin-top:10;"
                    @tap="toggleDrawer()">
                    <Label :text="drawerToggle ? drawer2: drawer1"
                        style="font-size:27;color:#fff;"
                        class="font-awesome" />
                </StackLayout>
                <StackLayout class="HMid" alignItems="left">
                    <TextField placeholderColor="white" id="searchField"
                        editable="true" hint="      Search"
                        returnKeyType="search" ios:height="30"
                        ios:marginTop="3" android:paddingBottom="5"
                        class="searchField font-awesome" color="#fff" />
                </StackLayout>
                <StackLayout class="HRight">
                    <Label text=""
                        android:class="notificationAndroid"
                        ios:class="notification" opacity="0" />
                    <Label text=""
                        android:style="font-size:25;margin-top:-15;color:#fff;"
                        ios:style="font-size:30;margin-top:-15;color:#fff;"
                        class="font-awesome" />
                </StackLayout>
            </StackLayout>
        </ActionBar>

        <RadSideDrawer ref="drawer" @drawerOpened="onDrawerOpened()"
            @drawerClosed="onDrawerClosed()">
            <StackLayout ~drawerContent backgroundColor="#eee">
                <StackLayout height="80%">
                    
                    <Label text="Login" @tap="loginTap()" paddingLeft="30%" color="black"
                        class="drawerItemText font-awesome" margin="10" />
                    <Label text="Profile" paddingLeft="30%" color="black"
                        class="drawerItemText font-awesome" margin="10" />

                    <Label text="Profile" paddingLeft="30%" color="black"
                        class="drawerItemText font-awesome" margin="10" />

                    <Label text="Status" paddingLeft="30%" color="black"
                        class="drawerItemText font-awesome" margin="10" />

                    <Label text="Frinds" paddingLeft="30%" color="black"
                        class="drawerItemText font-awesome" margin="10" />


                </StackLayout>

                <StackLayout class="">
                    <Label text="  Settings" paddingLeft="30%" color="black"
                        class="drawerItemText font-awesome" margin="10" />
                    <Label text="  Log out" paddingLeft="30%" color="black"
                        class="drawerItemText font-awesome" margin="10" />
                </StackLayout>
            </StackLayout>

            <StackLayout ~mainContent>

                <DockLayout>
                    

                    <StackLayout dock="top" height="90%" width="100%"
                        style="">

                        <ActivityIndicator rowSpan="3" :busy="processing">
                        </ActivityIndicator>
                        <ListView for="item in products" :key="index"
                            height="100%" separatorColor="transparent"
                            id="listView">
                            <v-template>

                                <StackLayout orientation="horizontal"
                                    style="border-bottom-width:1;border-bottom-color:#E4E4E4;"
                                    padding="10">
                                    <StackLayout width="20%">
                                        <Image :src="URL+item.photo_link"
                                            stretch="aspectFill"
                                            class="conImg" />
                                    </StackLayout>
                                    <StackLayout marginLeft="10"
                                        paddingTop="3" width="50%">
                                        <Label :text="item.product_name"
                                            :class="'convFriendName ' + item.read" />
                                        <Label :text="item.convText"
                                            :class="'convTextOut ' + item.read" />
                                    </StackLayout>
                                    <StackLayout marginLeft="10"
                                        paddingTop="3" width="60%">
                                        <Label :text="item.convDate"
                                            :class="'convDateOut ' + item.read" />
                                        <Label text=""
                                            :visibility="item.seenVisibility"
                                            style="font-size:17;text-align:center;margin-top:12;color:#1aa3ff;"
                                            class="font-awesome" />
                                    </StackLayout>
                                </StackLayout>

                            </v-template>
                        </ListView>

                    </StackLayout>

                    <StackLayout dock="bottom" height="10%"
                        style="border-color:#E4E4E4;border-width:1;background:#fff;">
                        <StackLayout orientation="horizontal">
                            <StackLayout class="navItem" @tap="homeTap()">
                                <Label text=""
                                    android:class="notificationAndroid"
                                    ios:class="notification" opacity="0" />
                                <Label text=""
                                    android:style="font-size:25;margin-top:-15"
                                    ios:style="font-size:30;margin-top:-15"
                                    class="font-awesome" />
                            </StackLayout>
                            <StackLayout class="navItem" @tap="profileTap()">
                                <Label text=""
                                    android:class="notificationAndroid"
                                    ios:class="notification" opacity="0" />
                                <Label text=""
                                    android:style="font-size:25;margin-top:-15"
                                    ios:style="font-size:30;margin-top:-15"
                                    class="font-awesome" />
                            </StackLayout>
                            <StackLayout class="navItem"
                                @tap="conversationsTap()">
                                <Label text="1"
                                    android:class="notificationAndroid"
                                    ios:class="notification" />
                                <Label text="" :color="mainColor"
                                    android:style="font-size:25;margin-top:-15"
                                    ios:style="font-size:30;margin-top:-15"
                                    class="font-awesome" />
                            </StackLayout>
                            <StackLayout class="navItem"
                                @tap="notificationsTap()">
                                <Label text="0"
                                    android:class="notificationAndroid"
                                    ios:class="notification" opacity="0" />
                                <Label text=""
                                    android:style="font-size:23;margin-top:-15"
                                    ios:style="font-size:29;margin-top:-15"
                                    class="font-awesome" />
                            </StackLayout>
                        </StackLayout>
                    </StackLayout>

                </DockLayout>

            </StackLayout>
        </RadSideDrawer>

    </Page>
</template>

<script>
    import Home from "./Home";
    import Profile from "./Profile";
    import Login from "./Login";
    export default {
        created() {},
        data() {
            return {
                URL: this.$URL,
                processing: true,
                drawerToggle: false,
                drawer1: "",
                drawer2: "",
                mainColor: "#1aa3ff",
                products : []
            };
        },

        mounted() {                 
            this.$backendService
                .Products()
                .then((resp) => {
                this.processing = false;
                this.products = resp.products;   
                    
                })
                .catch(() => {
                    this.processing = false;
                    this.alert(
                        "Please Try again"
                        );
                });
        },

        methods: {
            onDrawerClosed() {
                this.drawerToggle = false;
            },
            onDrawerOpened() {
                this.drawerToggle = true;
            },
            toggleDrawer() {
                this.$refs.drawer.nativeView.toggleDrawerState();
            },
            homeTap() {
                this.$navigateTo(Home, {
                    clearHistory: true,
                    animated: false
                });
            },

            loginTap() {
                this.$navigateTo(Login, {
                    clearHistory: true,
                    animated: false
                });
            },
            profileTap() {
                this.$navigateTo(Profile, {
                    clearHistory: true,
                    animated: false
                });
            },
            alert(message) {
                return alert({
                    title: "APP NAME",
                    okButtonText: "OK",
                    message: message
                });
            },
            conversationsTap() {},
            notificationsTap() {},
            showDetails() {}
        }
    };
</script>

<style>
</style>