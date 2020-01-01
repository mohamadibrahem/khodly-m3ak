// The following is a sample implementation of a backend service using Progress Kinvey (https://www.progress.com/kinvey).
// Feel free to swap in your own service / APIs / etc here for your own apps.
const httpModule = require("tns-core-modules/http");
const appSettings = require("tns-core-modules/application-settings");
var URL = "http://northpoleagency.com/idea-app/";

const token = appSettings.getString("token",'token');


export default class BackendService {

    isLoggedIn() {
        return !!Kinvey.User.getActiveUser();
    }

    logout() {
        return Kinvey.User.logout();
    }

    login(user) {
        
        return httpModule.request({
            url: URL+"api/login",
            method: "POST",
            headers: { "Content-Type": "application/json" ,
            "Authorization": 'Bearer '+token },
            content: JSON.stringify({
                "username": user.email,
                "password": user.password
                })
        }).then((response) => {
            let result = response.content.toJSON();
            appSettings.setString('token', result.token);


            return result;

            console.log(result)
        }, (e) => {
            console.log(e);
        });
    }

    
    register(user) {
        return httpModule.request({
            url: URL+"api/register3",
            method: "POST",
            headers: { "Content-Type": "application/json" },
            content: JSON.stringify({
                "name":"mohamad",
                "email": user.email,
                "password": user.password,
                "c_password": user.confirmPassword,
                "phone": "963963963",
                'acount_type': "0",

            
        })
        }).then((response) => {
            let result = response.content.toJSON();


            return result;

            console.log(result)
        }, (e) => {
            console.log(e);
        });
    }

    Products() {
        return httpModule.request({
            url: URL+"api",
            method: "GET",
            headers: { "Content-Type": "application/json",
            "Authorization": 'Bearer '+token }
           
        }).then((response) => {
            let result = response.content.toJSON();


            return result;

            console.log(result)
        }, (e) => {
            console.log(e);
        });
    }

    StatusIndex(status) {
        return httpModule.request({
            url: URL+"api/status",
            method: "GET",
            headers: { "Content-Type": "application/json" }
           
        }).then((response) => {
            let result = response.content.toJSON();


            return result;

            console.log(result)
        }, (e) => {
            console.log(e);
        });
    }


    StatusStore(status) {
        return httpModule.request({
            url: URL+"api/login",
            method: "POST",
            headers: { "Content-Type": "application/json",
            "Authorization": 'Bearer '+token },
            content: JSON.stringify({
                'to_city_id': status.to_city_id,
                'status_text': status.status_text,
                'from_city_id': status.from_city_id,
                'arrival_date': status.arrival_date,
                'to_country_id': status.to_country_id,
                'from_country_id': status.from_country_id,
                'date_of_departure': status.date_of_departure,
                
            })
        }).then((response) => {
            let result = response.content.toJSON();


            return result;

            console.log(result)
        }, (e) => {
            console.log(e);
        });
    }

    StatusUpdate(status) {
        return httpModule.request({
            url: URL+"api/status",
            method: "PUT",
            headers: { "Content-Type": "application/json",
            "Authorization": 'Bearer '+token },
            content: JSON.stringify({
                'to_city_id': status.to_city_id,
                'status_text': status.status_text,
                'from_city_id': status.from_city_id,
                'arrival_date': status.arrival_date,
                'to_country_id': status.to_country_id,
                'from_country_id': status.from_country_id,
                'date_of_departure': status.date_of_departure,
                
            })
        }).then((response) => {
            let result = response.content.toJSON();


            return result;

            console.log(result)
        }, (e) => {
            console.log(e);
        });
    }

    StatusShow(status) {
        return httpModule.request({
            url: URL+"api/status/"status.id,
            method: "GET",
            headers: { "Content-Type": "application/json" }
        
        }).then((response) => {
            let result = response.content.toJSON();

            return result;

            console.log(result)
        }, (e) => {
            console.log(e);
        });
    }


    StatusDelete(status) {
        return httpModule.request({
            url: URL+"api/status/"status.id,
            method: "Delete",
            headers: { "Content-Type": "application/json",
            "Authorization": 'Bearer '+token  },

            
        }).then((response) => {
            let result = response.content.toJSON();


            return result;

            console.log(result)
        }, (e) => {
            console.log(e);
        });
    }


    sentIndex(sent) {
        return httpModule.request({
            url: URL+"api/sent",
            method: "GET",
            headers: { "Content-Type": "application/json",
            "Authorization": 'Bearer '+token  },

            
        }).then((response) => {
            let result = response.content.toJSON();


            return result;

            console.log(result)
        }, (e) => {
            console.log(e);
        });
    }


    sentStore(sent) {
        return httpModule.request({
            url: URL+"api/sent",
            method: "POST",
            headers: { "Content-Type": "application/json",
            "Authorization": 'Bearer '+token  },
            content: JSON.stringify({
                'details': sent.details,
                'to_user_id': sent.to_user_id,
                'from_user_id': sent.from_user_id,
                'with_user_id': sent.with_user_id,
                'delivery_date': sent.delivery_date,
                'delivery_time': sent.delivery_time,
                'traveler_approval': sent.traveler_approval,
                'received_approved': sent.received_approved,
                
            })
        }).then((response) => {
            let result = response.content.toJSON();


            return result;

            console.log(result)
        }, (e) => {
            console.log(e);
        });
    }

    sentUpdate(sent) {
        return httpModule.request({
            url: URL+"api/sent",
            method: "PUT",
            headers: { "Content-Type": "application/json",
            "Authorization": 'Bearer '+token },
            content: JSON.stringify({
                'details': sent.details,
                'to_user_id': sent.to_user_id,
                'from_user_id': sent.from_user_id,
                'with_user_id': sent.with_user_id,
                'delivery_date': sent.delivery_date,
                'delivery_time': sent.delivery_time,
                'traveler_approval': sent.traveler_approval,
                'received_approved': sent.received_approved,
                
            })
        }).then((response) => {
            let result = response.content.toJSON();


            return result;

            console.log(result)
        }, (e) => {
            console.log(e);
        });
    }

    sentShow(sent) {
        return httpModule.request({
            url: URL+"api/sent/"sent.id,
            method: "GET",
            headers: { "Content-Type": "application/json",
            "Authorization": 'Bearer '+token   },
           
        }).then((response) => {
            let result = response.content.toJSON();


            return result;

            console.log(result)
        }, (e) => {
            console.log(e);
        });
    }


    sentDelete(sent) {
        return httpModule.request({
            url: URL+"api/sent/"sent.id,
            method: "Delete",
            headers: { "Content-Type": "application/json",
            "Authorization": 'Bearer '+token },
            
        }).then((response) => {
            let result = response.content.toJSON();


            return result;

            console.log(result)
        }, (e) => {
            console.log(e);
        });
    }

    receiptIndex(receipt) {
        return httpModule.request({
            url: URL+"api/receipt",
            method: "GET",
            headers: { "Content-Type": "application/json",
            "Authorization": 'Bearer '+token  },
           
        }).then((response) => {
            let result = response.content.toJSON();


            return result;

            console.log(result)
        }, (e) => {
            console.log(e);
        });
    }


    receiptStore(receipt) {
        return httpModule.request({
            url: URL+"api/receipt",
            method: "POST",
            headers: { "Content-Type": "application/json",
            "Authorization": 'Bearer '+token },
            content: JSON.stringify({
                'sent_id': receipt.sent_id,
                'details': receipt.details,
                'to_user_id': receipt.to_user_id,
                'with_user_id': receipt.with_user_id,
                'delivery_date': receipt.delivery_date,
                'delivery_time': receipt.delivery_time,
                'traveler_approval': receipt.traveler_approval,
                'received_approved': receipt.received_approved,
                
            })
        }).then((response) => {
            let result = response.content.toJSON();


            return result;

            console.log(result)
        }, (e) => {
            console.log(e);
        });
    }

    receiptUpdate(receipt) {
        return httpModule.request({
            url: URL+"api/receipt",
            method: "PUT",
            headers: { "Content-Type": "application/json",
            "Authorization": 'Bearer '+token },
            content: JSON.stringify({
                'sent_id': receipt.sent_id,
                'details': receipt.details,
                'to_user_id': receipt.to_user_id,
                'with_user_id': receipt.with_user_id,
                'delivery_date': receipt.delivery_date,
                'delivery_time': receipt.delivery_time,
                'traveler_approval': receipt.traveler_approval,
                'received_approved': receipt.received_approved,
                
            })
        }).then((response) => {
            let result = response.content.toJSON();


            return result;

            console.log(result)
        }, (e) => {
            console.log(e);
        });
    }

    receiptShow(receipt) {
        return httpModule.request({
            url: URL+"api/receipt/"receipt.id,
            method: "GET",
            headers: { "Content-Type": "application/json",
            "Authorization": 'Bearer '+token },
            
        }).then((response) => {
            let result = response.content.toJSON();


            return result;

            console.log(result)
        }, (e) => {
            console.log(e);
        });
    }


    receiptDelete(receipt) {
        return httpModule.request({
            url: URL+"api/receipt"receipt.id,
            method: "Delete",
            headers: { "Content-Type": "application/json",
            "Authorization": 'Bearer '+token },
            
        }).then((response) => {
            let result = response.content.toJSON();


            return result;

            console.log(result)
        }, (e) => {
            console.log(e);
        });
    }


}