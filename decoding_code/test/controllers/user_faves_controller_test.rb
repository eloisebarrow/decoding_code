require 'test_helper'

class UserFavesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @user_fave = user_faves(:one)
  end

  test "should get index" do
    get user_faves_url, as: :json
    assert_response :success
  end

  test "should create user_fave" do
    assert_difference('UserFave.count') do
      post user_faves_url, params: { user_fave: { deck_id: @user_fave.deck_id, user_id: @user_fave.user_id } }, as: :json
    end

    assert_response 201
  end

  test "should show user_fave" do
    get user_fave_url(@user_fave), as: :json
    assert_response :success
  end

  test "should update user_fave" do
    patch user_fave_url(@user_fave), params: { user_fave: { deck_id: @user_fave.deck_id, user_id: @user_fave.user_id } }, as: :json
    assert_response 200
  end

  test "should destroy user_fave" do
    assert_difference('UserFave.count', -1) do
      delete user_fave_url(@user_fave), as: :json
    end

    assert_response 204
  end
end
