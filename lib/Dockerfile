FROM quay.io/maherzubair/sigma-md:beta
RUN git clone https://github.com/zetauh/SIGMA-MD /root/zetauh/SIGMA-MD
WORKDIR /root/zetauh/SIGMA-MD/
RUN npm install npm@latest
RUN npm install
EXPOSE 8000
CMD ["npm", "start"]
 
 
