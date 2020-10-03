# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'
User.delete_all
Pin.destroy_all
Board.destroy_all
PinBoard.destroy_all

user1 = User.create(email: 'xiao@gmail.com', password: '123456')
user2 = User.create(email: 'ian@gmail.com', password: '123456')
user3 = User.create(email: 'aaa@gmail.com', password: '123456')
user4 = User.create(email: 'bbb@gmail.com', password: '123456')
user5 = User.create(email: 'ccc@gmail.com', password: '123456')

pin1 = Pin.create(title:'knight', user_id: user1.id)
file1 = open('https://pinshare-dev.s3-us-west-1.amazonaws.com/alex-knight.jpg')
pin1.photo.attach(io: file1, filename: 'alex-knight.jpg')

pin2 = Pin.create(title:'arts', user_id: user1.id)
file2 = open('https://pinshare-dev.s3-us-west-1.amazonaws.com/allec-gomes.jpg')
pin2.photo.attach(io: file2, filename: 'allec-gomes.jpg')

pin3 = Pin.create(title:'blueandpink', user_id: user1.id)
file3 = open('https://pinshare-dev.s3-us-west-1.amazonaws.com/bryan-garces.jpg')
pin3.photo.attach(io: file3, filename: 'bryan-garces.jpg')

pin4 = Pin.create(title:'building', user_id: user1.id)
file4 = open('https://pinshare-dev.s3-us-west-1.amazonaws.com/cheng-feng.jpg')
pin4.photo.attach(io: file4, filename: 'cheng-feng.jpg')

pin5 = Pin.create(title:'interior', user_id: user1.id)
file5 = open('https://pinshare-dev.s3-us-west-1.amazonaws.com/dan-dodman.jpg')
pin5.photo.attach(io: file5, filename: 'dan-dodman.jpg')

pin6 = Pin.create(title:'sunflower', user_id: user1.id)
file6 = open('https://pinshare-dev.s3-us-west-1.amazonaws.com/dan-smedley.jpg')
pin6.photo.attach(io: file6, filename: 'dan-smedley.jpg')

pin7 = Pin.create(title:'laundry', user_id: user2.id)
file7 = open('https://pinshare-dev.s3-us-west-1.amazonaws.com/denys-nevozhai.jpg')
pin7.photo.attach(io: file7, filename: 'denys-nevozhai.jpg')

pin8 = Pin.create(title:'sky', user_id: user2.id)
file8 = open('https://pinshare-dev.s3-us-west-1.amazonaws.com/emilio-garcia.jpg')
pin8.photo.attach(io: file8, filename: 'emilio-garcia.jpg')

pin9 = Pin.create(title:'chair', user_id: user2.id)
file9 = open('https://pinshare-dev.s3-us-west-1.amazonaws.com/gabe-rebra.jpg')
pin9.photo.attach(io: file9, filename: 'gabe-rebra.jpg')

pin10 = Pin.create(title:'moon', user_id: user2.id)
file10 = open('https://pinshare-dev.s3-us-west-1.amazonaws.com/griffin-wooldridge.jpg')
pin10.photo.attach(io: file10, filename: 'griffin-wooldridge.jpg')

pin11 = Pin.create(title:'birds', user_id: user2.id)
file11 = open('https://pinshare-dev.s3-us-west-1.amazonaws.com/ivan-torres-X.jpg')
pin11.photo.attach(io: file11, filename: 'ivan-torres-X.jpg')

pin12 = Pin.create(title:'coffee', user_id: user2.id)
file12 = open('https://pinshare-dev.s3-us-west-1.amazonaws.com/ivan-torres.jpg')
pin12.photo.attach(io: file12, filename: 'ivan-torres.jpg')

pin13 = Pin.create(title:'piano', user_id: user2.id)
file13 = open('https://pinshare-dev.s3-us-west-1.amazonaws.com/miguel-dominguez.jpg')
pin13.photo.attach(io: file13, filename: 'miguel-dominguez.jpg')

pin14 = Pin.create(title:'hiking', user_id: user2.id)
file14 = open('https://pinshare-dev.s3-us-west-1.amazonaws.com/mikita-karasiou.jpg')
pin14.photo.attach(io: file14, filename: 'mikita-karasiou.jpg')

pin15 = Pin.create(title:'shop', user_id: user3.id)
file15 = open('https://pinshare-dev.s3-us-west-1.amazonaws.com/patrick-langwallner.jpg')
pin15.photo.attach(io: file15, filename: 'patrick-langwallner.jpg')

pin16 = Pin.create(title:'balloon', user_id: user3.id)
file16 = open('https://pinshare-dev.s3-us-west-1.amazonaws.com/ralph-ravi.jpg')
pin16.photo.attach(io: file16, filename: 'ralph-ravi.jpg')

pin17 = Pin.create(title:'hongkong', user_id: user3.id)
file17 = open('https://pinshare-dev.s3-us-west-1.amazonaws.com/sean-foley.jpg')
pin17.photo.attach(io: file17, filename: 'sean-foley.jpg')

pin18 = Pin.create(title:'shanghai', user_id: user3.id)
file18 = open('https://pinshare-dev.s3-us-west-1.amazonaws.com/shanghai.jpg')
pin18.photo.attach(io: file18, filename: 'shanghai.jpg')

pin19 = Pin.create(title:'paint', user_id: user3.id)
file19 = open('https://pinshare-dev.s3-us-west-1.amazonaws.com/taelynn-christopher.jpg')
pin19.photo.attach(io: file19, filename: 'taelynn-christopher.jpg')

pin20 = Pin.create(title:'orca', user_id: user3.id)
file20 = open('https://pinshare-dev.s3-us-west-1.amazonaws.com/tim-cole.jpg')
pin20.photo.attach(io: file20, filename: 'tim-cole.jpg')

pin21 = Pin.create(title:'marina_piano', user_id: user3.id)
file21 = open('https://pinshare-dev.s3-us-west-1.amazonaws.com/marina-piano.jpg')
pin21.photo.attach(io: file21, filename: 'marina-piano.jpg')

pin22 = Pin.create(title:'nanjingroad', user_id: user3.id)
file22 = open('https://pinshare-dev.s3-us-west-1.amazonaws.com/krzysztof-kotkowicz.jpg')
pin22.photo.attach(io: file22, filename: 'krzysztof-kotkowicz.jpg')

pin23 = Pin.create(title:'shanghaisky', user_id: user3.id)
file23 = open('https://pinshare-dev.s3-us-west-1.amazonaws.com/yiranding.jpg')
pin23.photo.attach(io: file23, filename: 'yiranding.jpg')

pin24 = Pin.create(title:'morningsky', user_id: user3.id)
file24 = open('https://pinshare-dev.s3-us-west-1.amazonaws.com/szabo-viktor.jpg')
pin24.photo.attach(io: file24, filename: 'szabo-viktor.jpg')

pin25 = Pin.create(title:'light', user_id: user4.id)
file25 = open('https://pinshare-dev.s3-us-west-1.amazonaws.com/ralph-ravi-kayden.jpg')
pin25.photo.attach(io: file25, filename: 'ralph-ravi-kayden.jpg')

pin26 = Pin.create(title:'building2', user_id: user4.id)
file26 = open('https://pinshare-dev.s3-us-west-1.amazonaws.com/kilian-seiler.jpg')
pin26.photo.attach(io: file26, filename: 'kilian-seiler.jpg')

pin27 = Pin.create(title:'sunflower2', user_id: user4.id)
file27 = open('https://pinshare-dev.s3-us-west-1.amazonaws.com/mark-rivera.jpg')
pin27.photo.attach(io: file27, filename: 'mark-rivera.jpg')

pin28 = Pin.create(title:'rest', user_id: user4.id)
file28 = open('https://pinshare-dev.s3-us-west-1.amazonaws.com/sincerely-media.jpg')
pin28.photo.attach(io: file28, filename: 'sincerely-media.jpg')

pin29 = Pin.create(title:'daisy', user_id: user4.id)
file29 = open('https://pinshare-dev.s3-us-west-1.amazonaws.com/corey-collins.jpg')
pin29.photo.attach(io: file29, filename: 'corey-collins.jpg')

pin30 = Pin.create(title:'avocado', user_id: user4.id)
file30 = open('https://pinshare-dev.s3-us-west-1.amazonaws.com/bethany-randall.jpg')
pin30.photo.attach(io: file30, filename: 'bethany-randall.jpg')


board1 = Board.create(title: 'emotion', user_id: user4.id)
board2 = Board.create(title: 'relax', user_id: user1.id)


pinboard1 = PinBoard.create(pin_id: pin25.id, board_id: board1.id)
pinboard2 = PinBoard.create(pin_id: pin26.id, board_id: board1.id)
pinboard3 = PinBoard.create(pin_id: pin27.id, board_id: board1.id)
pinboard4 = PinBoard.create(pin_id: pin2.id, board_id: board2.id)
pinboard5 = PinBoard.create(pin_id: pin3.id, board_id: board2.id)
pinboard6 = PinBoard.create(pin_id: pin4.id, board_id: board2.id)
pinboard7 = PinBoard.create(pin_id: pin5.id, board_id: board2.id)

f1 = Follow.create(user_id: user2.id, follower_id: user1.id)
f2 = Follow.create(user_id: user2.id, follower_id: user3.id)
f3 = Follow.create(user_id: user2.id, follower_id: user4.id)
f4 = Follow.create(user_id: user1.id, follower_id: user2.id)