app.factory('forecast', ['$http', function($http) { 
    var data = {
	    "city_name": "Paris",
	    "country": "Fr",
	    "days": [
		{
		    "datetime": 1420390800000,
		    "icon": "https://cdn4.iconfinder.com/data/icons/weather-29/256/sun_simple-512.png",
		    "high": 68,
		    "low": 37
		},
		{
		    "datetime": 1420477200000,
		    "icon": "https://cdn0.iconfinder.com/data/icons/web-service-and-development/512/cloud_computing_web_network_content_server_data_backup_weather_cloudscape_upload_download_information_connection_hosting_global_database_storage_online_flat_design_icon-512.png",
		    "high": 68,
		    "low": 37
		},
		{
		    "datetime": 1420563600000,
		    "icon": "https://cdn3.iconfinder.com/data/icons/theweather/128/RainD-A-512.png",
		    "high": 46,
		    "low": 14
		},
		{
		    "datetime": 1420650000000,
		    "icon": "https://cdn0.iconfinder.com/data/icons/web-service-and-development/512/cloud_computing_web_network_content_server_data_backup_weather_cloudscape_upload_download_information_connection_hosting_global_database_storage_online_flat_design_icon-512.png",
		    "high": 46,
		    "low": 28
		},
		{
		    "datetime": 1420736400000,
		    "icon": "https://cdn4.iconfinder.com/data/icons/weather-29/256/sun_simple-512.png",
		"high": 59,
		    "low": 32
		}
	    ]
	};    

    return {
	getData: function(){
	    return data;
	}
    }
}]);
