import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';
import { 
  click,
  visit, 
  currentURL 
} from '@ember/test-helpers';

module('Acceptance | list rentals', function(hooks) {
  setupApplicationTest(hooks);

  test('should show rentals as the home page', async function(assert){
    await visit('/');
    assert.equal(currentURL(), '/rentals', 'should redirect automatically');
  });

  test('should link to information about the company', async function(assert) {
    await visit('/');
    await click(".menu-about");
    assert.equal(currentURL(), '/about', 'should navigate to about')
  });

  // test('should link to contact information.', function(assert) {

  // });

  // test('should list available rentals.', function(assert){

  // });
  
  // test('should fliter the list of rentals by city.', function(assert){

  // });

  // test('should show details for a selected rental', function(assert) {
    
  // })
});
