const { Model } = require('objection');

class Member extends Model {
  static get tableName() {
    return 'member';
  }
}
module.exports = Member;