class CreateDecks < ActiveRecord::Migration[6.0]
  def change
    create_table :decks do |t|
      t.string :topic
      t.boolean :is_public
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
