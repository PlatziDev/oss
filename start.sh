make start-dev

case "$(uname -s)" in

   Darwin)
    export DOCKER_IP="$(dinghy ip)"
     ;;

   Linux)
     export DOCKER_IP='localhost'
     ;;
   *)
     export DOCKER_IP='localhost'
     ;;
esac

sleep 1s
API_STATUS=`curl -i -X GET http://$DOCKER_IP:9001/apis/oss/|awk 'NR==1{print $2}'`
if [ $API_STATUS != 200 ]; then
    echo "registering oss on kong"
    curl -i -X POST \
      --url http://$DOCKER_IP:9001/apis/ \
      --data 'name=oss' \
      --data 'upstream_url=http://platzi-oss:8000/' \
      --data 'request_path=/oss' \
      --data 'strip_request_path=true' \
      --data 'preserve_host=false' \
      > /dev/null
fi
