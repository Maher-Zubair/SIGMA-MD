FROM quay.io/maherzubair/sigma-md:beta
RUN git clone https://github.com/SuhailTechInfo/SIGMA-MD /root/Maher
WORKDIR /root/Maher
RUN npm install npm@latest
RUN npm install
EXPOSE 8000
CMD ["npm", "start"]
 