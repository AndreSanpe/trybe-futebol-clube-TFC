import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import UserModel from '../database/models/Users';

import { Response } from 'superagent';

chai.use(chaiHttp);

const { expect } = chai;

describe('Testing login route', () => {

    let chaiHttpResponse: Response;

//   beforeEach(async () => {
//     sinon
//       .stub(UserModel, "findOne")
//       .resolves({
//         ...<Seu mock>
//       } as UserModel);
//   });

  // after(()=>{
  //   (Example.findOne as sinon.SinonStub).restore();
  // })
  describe('First we are going to test the "/" route', () => {
      it('testing if the we can access the route /', async () => {
        chaiHttpResponse = await chai.request(app).get('/')        
        expect(chaiHttpResponse.status).to.equal(200);
      });
  
  })
  describe('test the "/login" route', () => {
    it('testing if the we can access the route "/login"', async () => {
      chaiHttpResponse = await chai.request(app).post('/login')
      expect(chaiHttpResponse.status).to.equal(201);
    });

})
});







