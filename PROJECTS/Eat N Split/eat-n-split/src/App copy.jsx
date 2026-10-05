import { initialFriends } from "./assets/data";

function Button({ children }) {
    return <button className="button">{children}</button>;
}

function Friend({ name, imageURL, balance }) {
    return (
        <li>
            <img src={imageURL} alt="" />
            <h3>{name}</h3>
            <p className={balance > 0 ? `green` : balance < 0 ? `red` : ``}>
                <span>
                    {balance > 0
                        ? `${name} owe ${name} $${balance}`
                        : balance < 0
                          ? `You owe's ${name} $${balance}`
                          : `You and ${name} are even`}
                </span>
            </p>

            <button className="button">Select</button>
        </li>
    );
}

function FriendsList() {
    return (
        <ul>
            {initialFriends.map((friend) => (
                <Friend
                    key={friend.id}
                    name={friend.name}
                    imageURL={friend.image}
                    balance={friend.balance}
                />
            ))}
        </ul>
    );
}

function AddFriend() {
    return (
        <div>
            <form className="form-add-friend">
                <label>🧑‍🤝‍🧑Friend's name</label>
                <input type="text" placeholder="Your friend's name" />

                <label>🖼️Friend's image</label>
                <input type="text" placeholder="Image URL..." />

                <Button className="button">Add</Button>
            </form>
        </div>
    );
}

function FormSplitBill() {
    return (
        <form className="form-split-bill">
            <h2>Split Bill with X</h2>

            <label>💰Bill Value</label>
            <input type="text" />

            <label>🙍‍♂️Your Expenses</label>
            <input type="text" />

            <label>🧑‍🤝‍🧑Friend's Expenses</label>
            <input type="text" />

            <label>💳Who is paying?</label>
            <select>
                <option value="">You</option>
                <option value="">Friend</option>
            </select>

            <Button className="button">Split bill</Button>
        </form>
    );
}

function App() {
    return (
        <div className="app">
            <div className="sidebar">
                <FriendsList />
                <AddFriend />
                <Button>Close</Button>
            </div>
            <div>
                <FormSplitBill />
            </div>
        </div>
    );
}

export default App;
