# Installation for thingsBoard on windows with docker

_From the official guide at: https://thingsboard.io/docs/user-guide/install/docker-windows/?ubuntuThingsboardQueue=inmemory_

> setup the docker volumes "mytb-data" & "mytb-logs"

```
    docker volume create mytb-data
    docker volume create mytb-logs
```

> Choose queue service _I chose in memory_

> Create yml file

> Pull the images and run the container

```
docker-compose pull
docker-compose up
```

### publish telemetry data on behalf of your device
  _I chose HTTP_

> Run the following command
```
curl -v -X POST -d "{\"temperature\": 25}" http://localhost:8080/api/v1/$ACCESS_TOKEN/telemetry --header "Content-Type:application/json"
```

> Or make an AJAX request

`$ACCESS_TOKEN=ivLHm803VQhSUfrPNUXL`

### Now the telemetry data can be viewed in the device's telemetry tab


### To set an alarm rule

> Setup device profile
> Setup alarm rule
> Add device profile to the device


