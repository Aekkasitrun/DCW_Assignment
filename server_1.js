var net = require('net');
var HOST = '127.0.0.1';
var PORT = 6969;

var db = {}
net.createServer(function(sock){
    var state = 0 //idle
    var current_key = null
    sock.on('data', function(data){
        switch(state){
            case 0:
                if(data == 'HELLO'){
                    sock.write('"type you name"')
                    state = 1 //wait for key
                }
                break
            case 1:
                current_key = data
                sock.write("" + db[current_key] || 0)
                sock.write('"What do you want ?"')
                sock.write('"type m for steamed rice topped with chicken"')
                sock.write('"price : 35"')
                sock.write('"type p for fried rice"')
                sock.write('"price : 50"')
                sock.write('"type k for Spicy fried chicken with basil leaves"')
                sock.write('"price : 50"')
                sock.write('"type e for Omelet"')
                sock.write('"price : 30"')
                sock.write('"type s to confirm your menu"')
                state = 2 //wait for key
                break
            case 2:
                if(data == 's' || data == 'S'){
                    sock.close()
                    state = 3 //end
                }
                else if(data == 'k' || data == 'K'){
                    try{
                        if(!db[current_key]){
                            db[current_key] = 0
                        }
                        db[current_key] += 50
                        sock.write("" + db[current_key])
                    }catch(e){
                        sock.write('INVALID')
                    }
                }
                else if(data == 'p' || data == 'P'){
                    try{
                        if(!db[current_key]){
                            db[current_key] = 0
                        }
                        db[current_key] += 50
                        sock.write("" + db[current_key])
                    }catch(e){
                        sock.write('INVALID')
                    }
                }
                else if(data == 'm' || data == 'M'){
                    try{
                        if(!db[current_key]){
                            db[current_key] = 0
                        }
                        db[current_key] += 35
                        sock.write("" + db[current_key])
                    }catch(e){
                        sock.write('INVALID')
                    }
                }
                else if(data == 'e' || data == 'E'){
                    try{
                        if(!db[current_key]){
                            db[current_key] = 0
                        }
                        db[current_key] += 30
                        sock.write("" + db[current_key])
                    }catch(e){
                        sock.write('INVALID')
                    }
                }
                else{
                    sock.write('"Please type the characters specified"')
                }
                    
        }
    });
}).listen(PORT , HOST);
console.log('Server listening on ' + HOST +':'+ PORT);