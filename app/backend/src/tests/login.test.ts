import * as sinon from 'sinon';
import * as chai from 'chai';
import user from './mocks/mock.user.db';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import UserModel from '../database/models/User';

import { Response } from 'superagent';
import User from '../database/models/User';
import { IUser } from '../interfaces/IUser';

chai.use(chaiHttp);

const { expect } = chai;

describe('Testing login route', () => {

    let chaiHttpResponse: Response;

  beforeEach(async () => {
    sinon
      .stub(UserModel, "findOne")
      .resolves(
        user as User
      );
  });

  afterEach(()=>{
    (UserModel.findOne as sinon.SinonStub).restore();
  })
  describe('First we are going to test the "/" route', () => {
      it('testing if the we can access the route /', async () => {
        chaiHttpResponse = await chai.request(app).get('/')        
        expect(chaiHttpResponse.status).to.equal(200);
      });
  
  })
  describe('test the "/login" route', () => {
    it('testing if we can access the route "/login"', async () => {
      chaiHttpResponse = await chai.request(app).post('/login')
      expect(chaiHttpResponse.status).to.equal(201);
    });

  })
  describe('test the "model" route', () => {
    it('testing if we can access db"', async () => {
      chaiHttpResponse = (await chai.request(app).post('/login')).body({
        email: "admin@admin.com",
        password: "secret_admin"
      })
      expect(chaiHttpResponse.status).to.equal(201);
    });

  })
});







