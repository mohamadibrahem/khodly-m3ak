<template>
    <Page class="page">

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

                </StackLayout>
            </StackLayout>
        </ActionBar>

        <RadSideDrawer ref="drawer" @drawerOpened="onDrawerOpened()"
            @drawerClosed="onDrawerClosed()">
            <StackLayout ~drawerContent backgroundColor="#eee">
                <StackLayout height="80%"></StackLayout>
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
                        <ScrollView>

                            <StackLayout style="font-size:18;">
                                <StackLayout alignItems="center">
                                    <Image
                                        src="~/assets/images/profilepic.png"
                                        stretch="aspectFill"
                                        class="profilePic">
                                    </Image>
                                    <Label text="Aurora Mary" color="#000"
                                        fontSize="19" fontWeight="bold"
                                        textAlignment="center" />
                                    <StackLayout class="aboutContainer">
                                        <StackLayout orientation="horizontal">
                                            <Label text=""
                                                style="font-size:18;color:#557AAD;"
                                                class="font-awesome" />
                                            <Label text="New York"
                                                style="font-size:16;color:#000;margin-left:9;margin-top:1;"
                                                class="font-awesome" />
                                        </StackLayout>
                                        <StackLayout orientation="horizontal"
                                            class="aboutRow">
                                            <Label text=""
                                                style="font-size:16;color:#557AAD;"
                                                class="font-awesome" />
                                            <Label text="Website.com"
                                                style="font-size:16;color:#000;margin-left:6;"
                                                class="font-awesome" />
                                        </StackLayout>

                                    </StackLayout>
                                    <StackLayout orientation="horizontal"
                                        class="followersContainer">
                                        <StackLayout width="33%">
                                            <Label text="6"
                                                class="followersTxtValue" />
                                            <Label text="Posts "
                                                class="followersTxt" />
                                        </StackLayout>
                                        <StackLayout width="33%">
                                            <Label text="2300"
                                                class="followersTxtValue" />
                                            <Label text="Followers "
                                                class="followersTxt" />
                                        </StackLayout>
                                        <StackLayout width="33%">
                                            <Label text="400"
                                                class="followersTxtValue" />
                                            <Label text="Following "
                                                class="followersTxt" />
                                        </StackLayout>
                                    </StackLayout>
                                </StackLayout>

                                <WrapLayout alignItems="left"
                                    backgroundColor="#eeeeee" marginTop="10">
                                    <Image src="~/assets/images/New-York.jpg"
                                        stretch="aspectFill" class="listImage"
                                        width="33.3%" height="140" />
                                    <Image src="~/assets/images/ny2.jpg"
                                        stretch="aspectFill" class="listImage"
                                        width="33.3%" height="140" />
                                    <Image src="~/assets/images/food.jpg"
                                        stretch="aspectFill" class="listImage"
                                        width="33.3%" height="140" />
                                    <Image src="~/assets/images/wedding.jpg"
                                        stretch="aspectFill" class="listImage"
                                        width="33.3%" height="140" />
                                    <Image src="~/assets/images/Selfie.jpg"
                                        stretch="aspectFill" class="listImage"
                                        width="33.3%" height="140" />
                                    <Image src="~/assets/images/nature.jpg"
                                        stretch="aspectFill" class="listImage"
                                        width="33.3%" height="140" />
                                </WrapLayout>

                            </StackLayout>


                        </ScrollView>
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
                                <Label text="" :color="mainColor"
                                    android:style="font-size:25;margin-top:-15"
                                    ios:style="font-size:30;margin-top:-15"
                                    class="font-awesome" />
                            </StackLayout>
                            <StackLayout class="navItem"
                                @tap="conversationsTap()">
                                <Label text="1"
                                    android:class="notificationAndroid"
                                    ios:class="notification" />
                                <Label text=""
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
    import Convs from "./Convs";
    export default {
        created() {},
        data() {
            return {
                drawerToggle: false,
                drawer1: "",
                drawer2: "",
                mainColor: "#1aa3ff"
            };
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
            profileTap() {},
            conversationsTap() {
                this.$navigateTo(Convs, {
                    clearHistory: true,
                    animated: false
                });
            },
            notificationsTap() {},
            showDetails() {}
        }
    };
</script>
<style scoped>
</style>