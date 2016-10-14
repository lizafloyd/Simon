require 'test_helper'

class ForksControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get forks_index_url
    assert_response :success
  end

  test "should get show" do
    get forks_show_url
    assert_response :success
  end

  test "should get new" do
    get forks_new_url
    assert_response :success
  end

  test "should get edit" do
    get forks_edit_url
    assert_response :success
  end

end
